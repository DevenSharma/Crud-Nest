import { Test, TestingModule } from '@nestjs/testing';
import { ContactsController } from './contacts.controller';
import { ContactsService } from '../contacts.service';

describe('Contacts Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ContactsController],
      providers:[ContactsService]
    }).compile();
  });
  it('should be defined', () => {
    const controller: ContactsController = module.get<ContactsController>(ContactsController);
    expect(controller).toBeDefined();
  });
  
});
