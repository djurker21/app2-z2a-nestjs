import { Inject, Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';
import { Op } from 'sequelize';

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

  async findAllPaginate(page: number, pageSize: number) {
    const offset = page * pageSize;
    const limit = pageSize;
    return await this.countriesRepository.findAll({
      limit: limit,
      offset: offset,
    });
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

  async search(name: string) {
    return await this.countriesRepository.findAll({
      where: {
        name: {
          [Op.substring]: name,
        },
      },
    });
  }
}
