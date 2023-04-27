import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [ProdutosModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
