/*
author: Ebod Shojaei
date: March 9, 2024
version: 1.0
description: reminder routes for Space web server
*/
import jwt from "jsonwebtoken";
import User from "../models/User";
import { JwtPayload } from "jsonwebtoken";
import { IDecodedUser } from "../controllers/userController";

/**
 * Decodes the JWT token and retrieves the user.
 * @param {string} token - JWT token.
 * @returns {Promise<IDecodedUser | null>} - The user object or null if not found.
 */
export async function getUserFromToken(token: string): Promise<IDecodedUser | null> {
    try {
        const decoded: JwtPayload = jwt.verify(token, "secret") as JwtPayload;
        const user = await User.findById(decoded.userId);
        if (user) {
            return { userId: user._id };
        }
        return null;
    } catch (error) {
        console.error("Error decoding token: ", error);
        return null;
    }
}
