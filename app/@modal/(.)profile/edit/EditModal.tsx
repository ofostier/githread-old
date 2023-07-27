'use client';

import { ProfileForm, ProfileFormType } from '@/app/profile/edit/ProfileForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { UserEdit } from '@/src/db/query/user.query';
import { useRouter } from 'next/navigation';

export const EditModal = ({
  user,
  editProfile,
}: {
  user: UserEdit;
  editProfile: (values: ProfileFormType) => Promise<string | void>;
}) => {
  const router = useRouter();

  return (
    <Dialog
      open={true}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <ProfileForm
          user={user}
          onSubmit={async (values) => {
            const result = await editProfile(values);
            router.back();
            return result;
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
