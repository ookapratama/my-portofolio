'use client';

import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi';

import { careerExperiences } from '@/config/career';

import CareerCard from './careerCard';
import SectionHeading from '../common/section-header';
import SectionSubHeading from '../common/section-sub-header';

const CareerList = () => {
  return (
    <section className="space-y-6 font-sora">
      <div className="space-y-2">
        <SectionHeading title="Career" icon={<CareerIcon className="mr-1" />} />
        <SectionSubHeading>
          <p>
            My professional career journey.
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {careerExperiences?.map((career, index) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
    </section>
  );
};

export default CareerList;
