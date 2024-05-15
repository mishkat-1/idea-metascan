import { compareAsc, format } from 'date-fns';

export const formatDate = (date: Date | string) =>
  format(typeof date === 'string' ? new Date(date) : date, 'do MMMM, yyyy');

export const formatDateWithTime = (date: Date | string) =>
  format(typeof date === 'string' ? new Date(date) : date, 'p, do MMMM, yyyy');

export const checkIfDatePassed = (date: Date | string) =>
  compareAsc(new Date(), typeof date === 'string' ? new Date(date) : date) === -1 ? false : true;
