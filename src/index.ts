import express from "express";
import YAML from "yaml";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";
import accountsRouter from "@/routes/accounts-route";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3003;

// Middleware
app.use(cors());
app.use(express.json());

// Load OpenAPI spec
const openApiPath = join(__dirname, "openapi.yaml");
const openApiContent = readFileSync(openApiPath, "utf8");
const swaggerDocument = YAML.parse(openApiContent);

// Swagger UI
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API Routes
app.use("/v1/accounts", accountsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
