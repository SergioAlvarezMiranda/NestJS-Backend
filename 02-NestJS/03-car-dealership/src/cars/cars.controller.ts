import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCardDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars') //Decoradores
// @UsePipes (ValidationPipe)
export class CarsController {
    constructor(private readonly carsService:CarsService){} // Inyectar desde cars.service
    
    //Metodos
    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
     getCarById(@Param('id', ParseUUIDPipe) id:string){
        //let index;
       // let card = this.carsService.findOneById(id) ;
        //console.log(`${card.brand} - ${card.model}`);
        // for (let i = 0; i < this.carsService.findAll.length; i++) {
        //     if(i === index){
        //         let res = `${card[index].brand} - ${card[index].model}`;
        //         console.log(`${res}`);
                
        //     }else if(index >=4){
        //         console.log(`No puede acceder`);
        //     }
        // }
       // return `${card.brand} - ${card.model}`;
       return this.carsService.findOneById( id );
    }

    @Post()
    createCar(@Body() createCardDto: CreateCardDto){
        return this.carsService.create( createCardDto );
        // return {
        //     ok:true,
        //     method: 'POST'
        // }
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe ) id:string,
        @Body() updateCarDto: UpdateCarDto )
    {
        return this.carsService.update(id, updateCarDto );
    }
    
    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe ) id: string ) {
        return this.carsService.delete( id )
    }

    
}
