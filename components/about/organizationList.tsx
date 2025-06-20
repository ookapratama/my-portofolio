'use client';

import { GiOrganigram as OrganizationIcon } from 'react-icons/gi';

import SectionHeading from '../common/section-header';
import SectionSubHeading from '../common/section-sub-header';
import { ORGANIZATION } from '@/config/organization';

import OrganizationCard from './organizationCard';

const OrganizationList = () => {
  return (
    <section className="space-y-6 font-sora">
      <div className="space-y-2">
        <SectionHeading
          title="Organization"
          icon={<OrganizationIcon size={22} className="mr-1" />}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My organization journey.</p>
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {ORGANIZATION?.map((item, index) => (
          <OrganizationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default OrganizationList;
