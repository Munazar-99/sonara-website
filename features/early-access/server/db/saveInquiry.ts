import prisma from '@/lib/prisma';

export async function saveSignUp(data: {
  businessName: string;
  name: string;
  email: string;
}) {
  return prisma.earlyAccess.create({ data });
}
