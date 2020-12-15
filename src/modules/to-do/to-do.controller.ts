import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('todo')
export class ToDoController {

    @Get()
    obtenerTodos(){
        return "Obtener todos";
    }

    @Get(':id')
    obtenerUnRegistro(@Param() params){
        return `Obtener el todo ${params.id}`
    }

    @Post()
    crearUnTodo(){
        return 'create'
    }


    @Put(':id')
    actualizarUnTodo(){
        return 'update'
    }

    @Delete(':id')
    eliminarTodo(){
        return 'delete'
    }

}
