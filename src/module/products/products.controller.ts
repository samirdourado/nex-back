// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
//   Query,
//   HttpCode,
// } from '@nestjs/common';
// import { ProductsService } from './products.service';
// import { CreateProductDTO } from './dto/create.product.dto';
// import { UpdateProductDTO } from './dto/update.product.dto';

// @Controller('products')
// export class ProductsController {
//   constructor(private readonly productsService: ProductsService) {}

//   @Post('')
//   create(@Body() createProductDTO: CreateProductDTO) {
//     return this.productsService.create(createProductDTO);
//   }

//   @Get('')
//   findAll(@Query('group') group: string | undefined) {
//     return this.productsService.findAll(group);
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.productsService.findOne(id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateProducTO: UpdateProductDTO) {
//     return this.productsService.update(id, updateProducTO);
//   }

//   @HttpCode(204)
//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.productsService.remove(id);
//   }
// }
