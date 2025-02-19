import express from "express";
import Message from "../models/message.js";
import { messageValidation } from "../utils/validation.js";
import { handleValidation } from "../utils/handleValidation.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Message.findByPk(id);
    res.json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
router.post("/", messageValidation, handleValidation, async (req, res) => {
  const { message } = req.body;
  try {
    const newMessage = await Message.create({ message });
    res.json(newMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    Message.destroy({ where: { id } }).then(() => {
      res.json({ message: "Message deleted" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.patch("/:id", messageValidation, handleValidation, async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  try {
    Message.update({ message }, { where: { id } }).then((rowUpdated) => {
      res.json(rowUpdated);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
