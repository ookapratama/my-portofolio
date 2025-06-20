'use client';

import { TbSchool as EducationIcon } from 'react-icons/tb';

import SectionHeading from '../common/section-header';
import SectionSubHeading from '../common/section-sub-header';
import { EDUCATION } from '@/config/education';

import EducationCard from './educationCard';

const EducationList = () => {
  return (
    <section className="space-y-6 font-sora">
      <div className="space-y-2">
        <SectionHeading
          title="Education"
          icon={<EducationIcon size={22} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My educational journey.</p>
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {EDUCATION?.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default EducationList;
