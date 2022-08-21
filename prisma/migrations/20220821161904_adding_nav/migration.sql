-- CreateTable
CREATE TABLE "Navigation" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "target" TEXT,
    "ref" TEXT,

    CONSTRAINT "Navigation_pkey" PRIMARY KEY ("id")
);
