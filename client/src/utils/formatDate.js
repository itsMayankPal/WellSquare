/**
 * Formats a given date into a readable string.
 * @param {string | Date} date - The date to format (ISO string or Date object).
 * @param {string} [locale="en-US"] - The locale for formatting (default is "en-US").
 * @param {Object} [options] - Additional options for formatting.
 * @returns {string} - A formatted date string.
 */
const formatDate = (date, locale = "en-US", options = {}) => {
  if (!date) {
    throw new Error("No date provided for formatting");
  }

  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateObj = typeof date === "string" ? new Date(date) : date;

  return dateObj.toLocaleDateString(locale, { ...defaultOptions, ...options });
};

/**
 * Formats a date and time into a readable string.
 * @param {string | Date} date - The date to format.
 * @param {string} [locale="en-US"] - The locale for formatting.
 * @returns {string} - A formatted date and time string.
 */
const formatDateTime = (date, locale = "en-US") => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return formatDate(date, locale, options);
};

export { formatDate, formatDateTime };
