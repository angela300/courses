import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import Dropdown from "./Dropdown";
import Uppersection from "./Uppersection";

export default async function TopicsList() {
  return (
    <>
      <Uppersection/>
      <Dropdown name="sciencerts"/>
      <Dropdown name="paces"/>
      <Dropdown name="allstates"/>
      <Dropdown name="mathfoundations"/>
      <Dropdown name="mathmahashtras"/>
      <Dropdown name="mathncerts"/>
    </>
  );
}
