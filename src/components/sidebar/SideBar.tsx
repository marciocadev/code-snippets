import { SideBarAwsIcon } from './SideBarAwsIcon';
import { ThemeIcon } from './ThemeIcon';
import { Divider } from './Divider';
import { DividerTheme } from './DividerTheme';

import aurora from '../../images/Arch_Amazon-Aurora_64.svg';
import comprehend from '../../images/Arch_Amazon-Comprehend_64.svg';
import s3 from '../../images/Arch_Amazon-Simple-Storage-Service_64.svg';
import appconfig from '../../images/Arch_AWS-AppConfig_64.svg';
import secrets from '../../images/Arch_AWS-Secrets-Manager_64.svg';
import ssm from '../../images/Arch_AWS-Systems-Manager_64.svg';

export const SideBar = () => {

  return (
    <div className="sidebar">
      <div className='theme-icon-box'>
        <ThemeIcon />
      </div>
      <DividerTheme />

      <SideBarAwsIcon svg={aurora} tooltip='Amazon Aurora' />
      <Divider />

      <SideBarAwsIcon svg={secrets} tooltip='AWS Secrets Manager' />
      <Divider />

      <SideBarAwsIcon svg={comprehend} tooltip='Amazon Comprehend' />
      <Divider />

      <SideBarAwsIcon svg={appconfig} tooltip='AWS AppConfig' />
      <Divider />

      <SideBarAwsIcon svg={ssm} tooltip='AWS Systems Manager' />
      <Divider />

      <SideBarAwsIcon svg={s3} tooltip='AWS Simple Storage Service (S3)' />
    </div>
  );
}