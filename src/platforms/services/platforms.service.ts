import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlatformDto, UpdatePlatformDto } from '../dtos/platforms.dtos';
import { Platform } from '../entities/platform.entity';

@Injectable()
export class PlatformsService {
    private counterID = 1;
    private platforms: Platform[] = [{
        id: 1,
        icon: 'Netflix.jsp',
        title: 'Netflix',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        icon: 'HBO.jsp',
        title: 'HBO',
        createdAt: new Date(),
        updatedAt: new Date()
    }]

    findAll() {
        return this.platforms;
    }

    findOne (id: number) {
        const platform = this.platforms.find((platform) => platform.id == id);
        if (!platform) {
            throw new NotFoundException(`The platform with Id #${id} does not exist`);
        }
        return platform;
    }

    create (payload: CreatePlatformDto) {
        const newPlarform = {
            id: this.counterID,
            ...payload
        }
        this.platforms.push(newPlarform);
        this.counterID += 1
        return newPlarform
    }

    update (id: number, payload: UpdatePlatformDto) {
        const platform = this.findOne(id);
        if (platform) {
            const index = this.platforms.findIndex((platform) => platform.id == id);
            this.platforms[index] = {
                ...platform,
                ...payload
            };
            return this.platforms[index];
        } else {
            return null;
        }
    }

    delete(id: number) {
        const index = this.platforms.findIndex((platform) => platform.id == id);
        if (index === -1) {
            throw new NotFoundException(`The platform with Id #${id} does not exist`);
        }
        this.platforms.splice(index, 1)
        return true;
    }
}
