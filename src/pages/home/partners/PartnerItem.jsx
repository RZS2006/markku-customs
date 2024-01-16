import { Trans } from 'react-i18next';

import { getImageSrc } from '@/utils';

import { ArrowOutwardIcon } from '@/icons';

const PartnerItem = ({ partner }) => {
  const { logo, name, since, link } = partner.fields;

  const year = new Date(since['en-US']).getFullYear();

  return (
    <a
      className="group block bg-zinc-900"
      href={link['en-US']}
      target="_blank"
      rel="noreferrer"
    >
      <div className="grid items-center px-16 py-12">
        <img src={`${getImageSrc(logo['en-US'])}?fm=webp&w=200`} alt="" />
      </div>
      <div className="bg-zinc-800 p-4">
        <div className="flex items-center gap-1">
          <h3 className="font-semibold">{name['en-US']}</h3>
          <ArrowOutwardIcon className="h-4 w-4" />
        </div>
        <p className="mt-1 text-sm text-zinc-400">
          <Trans i18nKey="since" year={year}>
            Since {{ year }}
          </Trans>
        </p>
      </div>
    </a>
  );
};

export default PartnerItem;
