import { Body, Controller, Get, HttpCode, Param, Post, Header, Req, Res  } from '@nestjs/common';
import {CategorieDTO} from "./DTO/categorie-dto"

@Controller("categories")
export class AppController {

  @Get()
  getAllCategories() {
    
  }

  @Post()
  saveCategorie(@Body() categorie: CategorieDTO) {
    return {
      status: "OK",
      message: "Voce inseriou a categoria " + categorie.name
    }
  }
}
