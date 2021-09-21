import { Inject, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
  constructor(
    @Inject('COUNTRY_REPOSITORY')
    private countriesRepository: typeof Country,
  ) {}

  async create(createCountryDto: CreateCountryDto) {
    return await this.countriesRepository.create(createCountryDto);
  }

  async findAll() {
    return await this.countriesRepository.findAll();
  }

  async findOne(id: number) {
    return await this.countriesRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    return await this.countriesRepository.update(updateCountryDto, {
      where: { id },
    });
  }

  async remove(id: number) {
    return await this.countriesRepository.destroy({ where: { id: id } });
  }
}
