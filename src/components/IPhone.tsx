import { useFrame } from '@fiber'
import { useGLTF, type GLTF } from '@drei'

export default function IPhone(props: any) {
  const { scene } = useGLTF(require('@assets/models/iphone.glb')) as GLTF

  useFrame(() => {
    scene.rotation.y += 0.01
  })

  return <primitive {...props} object={scene} />
}
