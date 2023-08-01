/*
  Warnings:

  - You are about to drop the `Job` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Job";

-- CreateTable
CREATE TABLE "forms" (
    "form_id" BIGINT NOT NULL,
    "form_data" JSONB NOT NULL,

    CONSTRAINT "forms_pkey" PRIMARY KEY ("form_id")
);

-- CreateTable
CREATE TABLE "responses" (
    "response_id" BIGINT NOT NULL,
    "form_id" BIGINT NOT NULL,
    "response_data" JSONB NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "responses_response_id_key" ON "responses"("response_id");
