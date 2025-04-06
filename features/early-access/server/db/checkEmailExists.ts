import prisma from '@/lib/prisma';
import 'server-only';

export const checkEmailExists = async (email: string) => {
  return prisma.earlyAccess.findUnique({
    where: { email },
    select: { id: true },
  });
};
