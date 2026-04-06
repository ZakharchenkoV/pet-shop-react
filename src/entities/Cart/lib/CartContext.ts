import { createContext } from 'react';

import type { CartContextType } from '../model/types';

export const CartContext = createContext<CartContextType | undefined>(undefined);
