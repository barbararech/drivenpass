-- CreateTable
CREATE TABLE "Networks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "networkName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Networks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Networks" ADD CONSTRAINT "Networks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
