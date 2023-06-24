import Users from '../modules/UserModules.js';

export const createUser = async (req, res) => {
    try {
        const user = await Users.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await Users.findByIdAndUpdate(req.params.id, req.body);
        if (!user) return res.status(404).json({ message: "User not found" });
        const updated = await Users.findById(req.params.id);
        res.status(200).json(updated);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}