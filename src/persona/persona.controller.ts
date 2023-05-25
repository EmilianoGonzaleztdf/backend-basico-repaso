import { Body, Controller, Get, Param, ParseIntPipe, Post, Delete} from '@nestjs/common';
import { PersonaService } from './persona.service';


@Controller('api')
export class PersonaController {
constructor (private personaService: PersonaService){}

  @Get('persona/lista')
  public getPersona():any {
    return this.personaService.getPersonas();
  }
  @Delete('persona/eliminar/:id')
  public getEliminarPersonas(@Param('id', ParseIntPipe)id:number):any{
    return this.personaService.getEliminarPersona(id);
  }
  @Post('persona/agregar')
  public crearPersona(@Body() body): string {
    return this.personaService.getCrearPersona(body)
  }
  @Get('persona/:id')
  public buscarPersona(@Param('id',ParseIntPipe)id:number):any{
    return this.personaService.getPersonasById(id);
  }
}
