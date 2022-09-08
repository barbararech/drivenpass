-- CreateTable
CREATE TABLE "SafeNotes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SafeNotes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SafeNotes_title_userId_key" ON "SafeNotes"("title", "userId");

-- AddForeignKey
ALTER TABLE "SafeNotes" ADD CONSTRAINT "SafeNotes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
