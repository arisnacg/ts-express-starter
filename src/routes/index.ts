import { Router } from "express"
import * as controller from "../controllers/index"
import * as BookController from "../controllers/BookController"

export const index = Router()

index.get("/", controller.index)
index.get("/book", BookController.index)
