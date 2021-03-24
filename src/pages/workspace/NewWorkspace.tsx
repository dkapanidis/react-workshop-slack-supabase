import React, { useEffect, useState } from 'react'
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';

function NewWorkspace() {
  const [{ user }] = useStateValue() as any;
  const [workspaces, setWorkspaces] = useState<any>([]);
  useEffect(() => {
    db.collection('workspaces')
      .where(`roles.${user.uid}`, "==", "owner").onSnapshot(snapshot => (
        setWorkspaces(snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })))
      )
      )
  }, [])

  return (
    <span className="flex flex-grow items-center justify-center">Welcome to Slack! Start by creating a new Workspace</span>
  )
}

export default NewWorkspace
