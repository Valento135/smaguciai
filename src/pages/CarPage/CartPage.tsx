import React from 'react';
import { useCart } from '../../Context/CartContext';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import { RemoveCircle } from '@mui/icons-material';
import { Toy } from '../../Interfaces/Toy';

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const handleRemoveItem = (item: Toy) => {
    removeFromCart(item);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cart Page
      </Typography>
      <List>
        {cart.map((cartItem) => (
          <ListItem key={cartItem.item.id}>
            <ListItemText
              primary={cartItem.item.name}
              secondary={`Quantity: ${cartItem.quantity}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                onClick={() => handleRemoveItem(cartItem.item)}
                color="secondary"
              >
                <RemoveCircle />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default CartPage;
