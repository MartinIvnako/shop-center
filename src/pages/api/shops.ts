// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {shops} from "@/services/constants/fakeShops";
import type { NextApiRequest, NextApiResponse } from "next";
import type { IShopApi } from "@/types/api";

export default function handler(
 req: NextApiRequest,
 res: NextApiResponse<IShopApi>
) {
  res.status(200).json({shops});
}
