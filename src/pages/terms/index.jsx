import React from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useTranslation } from 'react-i18next';

import Loading from '@/components/Loading';
import SEO from '@/components/SEO';
import Container from '@/components/layout/Container';

import { usePage } from '@/hooks';

import { formatDate } from '@/utils';

import { RICH_TEXT_OPTIONS } from '@/constants';

const TermsPage = () => {
  const { t, i18n } = useTranslation();

  const lng = i18n.language;

  const { page, error } = usePage('terms');

  return (
    <>
      <SEO title={`${t('footer.terms')} | Markku Customs`} />

      <Container className="py-8">
        {!page ? (
          <Loading error={error} />
        ) : (
          <>
            <h1 className="font-heading text-4xl sm:text-6xl">
              {t('footer.terms')}
            </h1>
            <div className="my-4 w-max bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
              {t('last-updated')}:{' '}
              {formatDate({ date: new Date(page.sys.updatedAt), locale: lng })}
            </div>
            <section>
              {documentToReactComponents(
                page.fields.content[lng],
                RICH_TEXT_OPTIONS
              )}
            </section>
          </>
        )}
      </Container>
    </>
  );
};

export default TermsPage;
