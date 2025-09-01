
npx prisma generate

npx prisam migrate dev
npx prisma migrate reset
npx prisma migrate resolve --rolled-back "<migration-name>"

create migration
npx prisma migrate dev --name <migration-name>

run migration file
npx prisma migrate deploy

### Create Seeder
1. Create the seeding file in prisma/seed.ts
2. Configure package.json
 "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }
3. Run the seeder
npx prisma db seed



# Encrypt Password Using "bcrypt"

const hashedPassword = await bcrypt.hash('password', 10);

### Compared with input password and hased password

const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
