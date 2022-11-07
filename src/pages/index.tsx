import { createContext, useState } from 'react';

import Filter from './components/filter';
import FooterComponent from './components/footer';
import Home from './components/home';

export interface FilterContextInterface {
  // filter array of objects with key and value (value can be string or number)
  filters: { key: string; value: string | number | undefined }[];
  price: number | undefined;
  participants: number | undefined;
  accessibility: number | undefined;
  categories: string;
  setFilters: (
    filters: { key: string; value: string | number | undefined }[]
  ) => void;
  setPrice: (price: number | undefined) => void;
  setParticipants: (participants: number | undefined) => void;
  setAccessibility: (accessibility: number | undefined) => void;
  setCategories: (categories: string) => void;
}

export const AppCtx = createContext<FilterContextInterface | null>(null);

export default function Index() {
  const [filters, setFilters] = useState<
    { key: string; value: string | number | undefined }[]
  >([]);
  const [price, setPrice] = useState<number | undefined>(0);
  const [participants, setParticipants] = useState<number | undefined>(1);
  const [accessibility, setAccessibility] = useState<number | undefined>(0);
  const [categories, setCategories] = useState<string>('');

  return (
    <AppCtx.Provider
      value={{
        filters,
        setFilters,
        price,
        setPrice,
        participants,
        setParticipants,
        accessibility,
        setAccessibility,
        categories,
        setCategories,
      }}
    >
      <div className='flex min-h-screen flex-col'>
        <Filter />
        <Home />
        <FooterComponent />
      </div>
    </AppCtx.Provider>
  );
}
