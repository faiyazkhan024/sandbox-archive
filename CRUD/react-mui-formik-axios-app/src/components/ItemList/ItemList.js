import React, { useState, useContext, useEffect } from "react";

import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
  ListItemIcon,
  Chip,
  Button,
} from "@material-ui/core";

import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";

import itemContext from "../../context/itemContext.js";
import { getItems, mailItems, deleteItem } from "../../helpers/http.js";

import itemListStyles from "./itemListStyles.js";

const ItemList = () => {
  const classes = itemListStyles();

  const [checked, setChecked] = useState([]);
  const [isSending, setIsSending] = useState();

  const { items, dispatch, setEditing } = useContext(itemContext);

  useEffect(() => {
    const getAllItems = async () => {
      try {
        const items = await getItems();
        dispatch({ type: "Get", payload: items });
      } catch (error) {
        console.log(
          "🚀 ~ file: ItemList.js ~ line 36 ~ getAllItems ~ error",
          error
        );
      }
    };
    getAllItems();
  }, [dispatch]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const onSend = async () => {
    setIsSending(true);
    try {
      const message = await mailItems(checked);
      alert(message);
      setChecked([]);
      setIsSending(false);
    } catch (error) {
      console.log("🚀 ~ file: ItemList.js ~ line 64 ~ onSend ~ error", error);
      setChecked([]);
      setIsSending(false);
    }
  };

  const onDeleteItem = (item) => async () => {
    try {
      const message = await deleteItem(item);
      alert(message);
      dispatch({ type: "Delete", payload: item });
    } catch (error) {
      console.log(
        "🚀 ~ file: ItemList.js ~ line 76 ~ onDeleteItem ~ error",
        error
      );
    }
  };

  const onEdit = (item) => () => {
    setEditing(item);
  };

  return (
    <List className={classes.root}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isSending || checked.length === 0}
        onClick={onSend}
        className={classes.submit}
      >
        {!isSending ? "Send" : "Sending..."}
      </Button>
      {items.map((item) => (
        <React.Fragment key={item._id}>
          <ListItem role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                onClick={handleToggle(item)}
                edge="start"
                checked={checked.indexOf(item) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-label": item._id }}
              />
            </ListItemIcon>

            <div>
              <ListItemText id={item._id} primary={item.name} />
              <ListItemText id={item._id} primary={item.mobile} />
              <ListItemText id={item._id} primary={item.email} />
            </div>

            <ListItemSecondaryAction>
              <IconButton
                className={classes.edit}
                onClick={onEdit(item)}
                edge="end"
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>

              <IconButton
                className={classes.delete}
                onClick={onDeleteItem(item)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              {item.hobbies.map((hobby, index) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={hobby}
                  className={classes.chip}
                />
              ))}
            </ListItem>
          </List>
        </React.Fragment>
      ))}
    </List>
  );
};

export default ItemList;
