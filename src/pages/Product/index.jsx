import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

import Container from '@/components/Container';
import SEO from '@/components/SEO';

import NotFoundPage from '../not-found';
import BasicInformation from './BasicInformation';
import Bundles from './Bundles';
import GamePerformance from './GamePerformance';
import ImageCarousel from './ImageCarousel';
import Specifications from './Specifications';

const ProductPage = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  const { data: product, error } = useSWR(
    `/.netlify/functions/getProduct?id=${id}`
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  if (error?.info?.error?.sys?.id === 'NotFound') {
    return <NotFoundPage />;
  }

  const name = product?.fields?.name;
  const description = product?.fields?.description;
  const price = product?.fields?.price;
  const stockable = product?.fields?.stockable;
  const itemsInStock = product?.fields?.itemsInStock;
  const specifications = product?.fields?.specifications;
  const images = product?.fields?.images;
  const gameNames = product?.fields?.gameNames;
  const gameFrameRates = product?.fields?.gameFrameRates;
  const paymentLink = product?.fields?.paymentLink;
  const bundles = product?.fields?.bundles;
  const noReturn = product?.fields?.noReturn;

  const lng = i18n.language;

  return (
    <>
      <SEO
        title={`${!product ? t('loading') : name[lng]} | Markku Customs`}
        description={t('seo.description')}
      />

      <Container>
        {!product ? (
          <div className="mt-8 grid min-h-[8rem] place-items-center rounded-md bg-zinc-800 p-4 text-zinc-400">
            {error ? (
              <div className="text-center">
                <p>{`${error.status} – ${error.info.message[lng]}`}</p>
                <p className="mt-2 text-sm text-zinc-500">
                  {t('automatic-retry')}
                </p>
              </div>
            ) : (
              t('loading')
            )}
          </div>
        ) : (
          <div className="product-page-grid">
            <BasicInformation
              name={name[lng]}
              price={price}
              description={description[lng] || description['en-US']}
              stockable={stockable['en-US']}
              itemsInStock={itemsInStock['en-US']}
              noReturn={noReturn['en-US']}
              paymentLink={paymentLink}
            />

            <ImageCarousel images={images} name={name[lng]} />

            {bundles && <Bundles bundles={bundles} />}

            {specifications && (
              <Specifications specifications={specifications[lng]} />
            )}

            {gameNames && gameFrameRates && (
              <GamePerformance
                gameNames={gameNames}
                gameFrameRates={gameFrameRates}
              />
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export default ProductPage;
