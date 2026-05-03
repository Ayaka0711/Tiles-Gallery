"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Edit } from "lucide-react";
import { BiUser } from "react-icons/bi";
import { authClient } from "./../lib/auth-client";

export function UpdateUserModal() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const image = formData.get("image");

    await authClient.updateUser({
      name,
      image,
    });
  };

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="flex gap-2">
      {/* Logout Button */}
      <Button
        variant="secondary"
        onClick={handleLogout}
        className="text-green-900"
      >
        Log Out
      </Button>

      {/* Modal */}
      <Modal>
        <Button variant="secondary" className="text-green-900">
          <Edit className="mr-1" />
          Update Profile
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />

              {/* Header */}
              <Modal.Header className="flex flex-col items-center text-center">
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <BiUser className="size-5" />
                </Modal.Icon>

                <Modal.Heading>Update User</Modal.Heading>
              </Modal.Header>

              {/* Body */}
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    {/* Name */}
                    <TextField className="w-full" name="name">
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>
                    {/* Image URL */}
                    <TextField className="w-full" name="image">
                      <Label>Image URL</Label>
                      <Input placeholder="Image URL" type="url" />
                    </TextField>

                    {/* Footer */}
                    <Modal.Footer>
                      <Button slot="close" variant="secondary" className="text-green-900">
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        slot="close"
                        className="bg-green-900 text-white hover:bg-green-900"
                      >
                        Save
                      </Button>
                      
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}