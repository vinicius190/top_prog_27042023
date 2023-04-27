import { Controller, Get, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Post()
    create() {
        return 'This action adds a new cat';
    }

    @Get()
    findAll() {
        return 'This action returns all cats';
    }

    @Get(':id')
        findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }
}