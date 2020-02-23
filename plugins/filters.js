import Vue from "vue";
import { currency } from "~/utilities/currency";

/**
 * Register Vue Filters
 */

Vue.filter("currency", currency);
