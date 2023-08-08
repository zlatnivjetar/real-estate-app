import PropertyCard from "./property-card";
import styles from "./properties-grid-container.module.css";
const PropertiesGridContainer = ({ allProperties }) => {
  return (
    <div className={styles.cardwrapper}>
      <div className={styles.cards}>
        {allProperties.map((property) => (
          <PropertyCard
           key={property.id} 
           imgUrl={property.image} 
           name={property.name} 
           price={property.price} 
           />
        ))}
      </div>
    </div>
  );
};

export default PropertiesGridContainer;
