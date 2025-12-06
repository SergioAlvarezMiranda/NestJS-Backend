import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(
        private readonly carsService:CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe ) id:number){
        const index = Number(id);
        const card = this.carsService.findAll();
        for (let i = 0; i < card.length; i++) {
            if(card[i].id === index){
                let res = JSON.stringify(card[i]);
                console.log(`${id} - ${res}`);
            }else if(index >=4){
                console.log(`No puede acceder`);
            }
        }
        return this.carsService.findOneById(+(id));
    }

    @Post()
    createCar(@Body() body:any){

        return body;
        // return {
        //     ok:true,
        //     method: 'POST'
        // }
    }

    @Patch(':id')
    updateCar(
        @Param('id',ParseIntPipe) id:number,
        @Body() body:any)
    {
        return body;
    }
    
    @Delete(':id')
    deleteCar(@Param('id',ParseIntPipe) id:number){

        return {
            method: 'delete',
            id
        }
    }
}
   