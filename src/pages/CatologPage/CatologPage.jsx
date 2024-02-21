import { Filters } from 'components/Filters/Filrers';
import { ListOfCars } from 'components/ListOfCars/ListOfCars';
import { Section } from 'components/Section/Section';

const Catalog = () => {
  return (
    <>
      <div>Catalog</div>
      <Section>
        <Filters />
      </Section>
      <ListOfCars />;
    </>
  );
};

export default Catalog;
