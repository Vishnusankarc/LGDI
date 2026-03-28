const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Fetching all services' });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Fetching service with ID: ${id}` });
});

router.post('/', (req, res) => {
    const { title, description, category, price, location } = req.body;
    res.status(201).json({ message: 'Service created successfully' });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, price, location } = req.body;
    res.status(200).json({ message: `Service with ID: ${id} updated successfully` });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Service with ID: ${id} deleted successfully` });
});

module.exports = router;