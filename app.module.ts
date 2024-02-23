import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/siswa.entity';
import { ClassStudent } from './entity/kelas.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'sandbox',
      entities: [Student, ClassStudent],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Student,ClassStudent])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
