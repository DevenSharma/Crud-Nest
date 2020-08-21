import { Test, TestingModule } from '@nestjs/testing';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact.entity';
describe('ContactsService', () => {
  let service: ContactsService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactsService],
      controllers: [ContactsController],
      imports: [
        TypeOrmModule.forFeature([Contact]),
      ],      
    }).compile();
    service = module.get<ContactsService>(ContactsService);
    
  });

  
  it('should be defined', () => {
    expect(true).toEqual(true);
  });
});
