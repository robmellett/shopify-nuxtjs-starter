import { every, find, some } from "lodash";

export const buildProductURL = product => {
  return `/products/${product.handle}`;
};

export const buildVariantURL = variant => {
  // return `/products/${variant.product.handle}?variant=${variant.id}`;
  return `/products/${variant.handle}`;
};

// Really important for Vuex and PDP page.
// Select the variant based on the user criteria
export const getSelectedVariant = (variants, selectedProductOptions) => {
  if (variants === undefined || selectedProductOptions == undefined) {
    return;
  }

  return find(variants, variant => {
    return every(selectedProductOptions, (value, key) => {
      return some(variant.selectedOptions, { name: key, value: value });
    });
  });
};

export const productGalleryImages = images => {
  return Array.isArray(images) && images.length >= 1
    ? images
    : [
        {
          src: noImagesAvailableURL(),
          alt: "No Image Available"
        }
      ];
};

export const productCardImage = image => {
  return image ? image : noImagesAvailableURL();
};

export const productCardShopifyImage = images => {
  return images.length > 0 ? images.shift().src : noImagesAvailableURL();
};

const noImagesAvailableURL = () => {
  return "" // require("~/assets/images/no-image-available.svg");
};
